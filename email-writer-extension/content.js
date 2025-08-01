console.log("Email Assistant Extension - Content Script Loaded") 

function findComposeToolbar() {
    const selectors = [
        '.btC',
        'aDh',
        '[role="toolbar"]',
        '.gu.Up'
    ];

        for (const selector of selectors) {
        const toolbar = document.querySelector(selector);
            if (toolbar) {
                return toolbar;
            }
        }
        return null;
}

function createAIButton() {
    const button = document.createElement('div');
    button.className = 'T-I J-J5-Ji aoO v7 T-I-atl L3 ai-reply-button';
    button.style.marginRight = '8px';
    button.style.backgroundColor = '#1159d1'; 
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.padding = '6px 12px';
    button.style.borderRadius = '12px';
    button.style.cursor = 'pointer';
    button.style.fontWeight = '500';
    button.style.fontSize = '14px';
    button.textContent = 'AI Reply';
    button.setAttribute('role', 'button');
    button.setAttribute('data-tooltip', 'Generate AI Reply');
    return button;
}

function getEmailContent() {
    const selectors = [
        '.h7',
        '.a3s.aiL',
        '.gmail_quote',
        '[role ="presentation]'
    ];

    for(const selector of selectors){
        const content = document.querySelector(selector);
        if(content){
            return content.innerText.trim();
        }
        return '';
    }
}

function injectButton(){
    const existingButton = document.querySelector('.ai-reply-button');
    if(existingButton) existingButton.remove();

    const toolbar = findComposeToolbar();

    if(!toolbar) {
        console.log("Toolbar not Found");
        return;
    }
    console.log("Toolbar Found, Creating AI Button");

    const button = createAIButton(); 
    button.classList.add('ai-reply-button');

    button.addEventListener('click', async () => {
        try {
            button.innerHTML = 'Generating...';
            button.disabled = true;

            const emailContent = getEmailContent();
            const response = await fetch('https://ai-email-assistant-ffb3.onrender.com/api/email/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    emailContent : emailContent,
                    tone : "professional"
                })
            });

            if(!response.ok){
                throw new Error('API Request Failed');
            }

            const generatedReply = await response.text();
            const composeBox = document.querySelector('[role="textbox"][g_editable="true"]');

            if(composeBox) {
                composeBox.focus();
                document.execCommand('insertText', false, generatedReply);
            }else{
                console.error('Compose Box was not found');
            }
        } catch (error) {
            console.log(error);
            alert('Failed to generate reply. Please check your internet or try again later.');
        } finally {
            button.innerHTML = 'AI Reply';
            button.disabled = false;
        }
    });

    toolbar.insertBefore(button, toolbar.firstChild);
}

const observer = new MutationObserver((mutations) => {
     for(const mutation of mutations){
        const addedNodes = Array.from(mutation.addedNodes);
        const hasComposeElements = addedNodes.some(node =>
            node.nodeType === Node.ELEMENT_NODE &&
            (node.matches('.aDh, .btC, [role="dialog"]') || node.querySelector('.aDh, .btC, [role="dialog"]'))
        );

        if(hasComposeElements){
            console.log("Compose Window Detected");
            setTimeout(injectButton, 100); 
        }
     }
});

observer.observe(document.body, {
    childList: true,
    subtree: true
})