import { useState } from 'react'
import './App.css'
import { CircularProgress, Container } from '@mui/material';
import axios from 'axios';

function App() {
  const[emailContent, setEmailContent] = useState('');
  const[tone, setTone] = useState('');
  const[generatedContent, setGeneratedContent] = useState('');
  const[loading, setLoading] = useState(false);
  const[error, setError] = useState('')

  const isButtonDisabled = !emailContent || loading;

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await axios.post("https://ai-email-assistant-8w3p.onrender.com/api/email/generate", {
        emailContent, 
        tone,
      });
      setGeneratedContent(typeof res.data === 'string' ? res.data : JSON.stringify);
    } catch (error) {
      setError('Falied to generate email reply. Please try again later.');
      console.error(error);
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className='flex flex-col items-center mt-8 px-6 sm:px-8'>
        <h2 className='text-4xl font-bold font-serif text-blue-800 tracking-wide mb-6 text-center '>SMART EMAIL ASSISTANT</h2>
        <div className="relative w-full sm:max-w-lg md:max-w-xl">
          <textarea
            id="emailContent"
            name="emailContent"
            rows={8}
            className="peer w-full p-4 pt-6 text-lg border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder=" "
            value={emailContent}
            onChange={(e) => setEmailContent(e.target.value)}
            required
          ></textarea>

        <label
          htmlFor="emailContent"
          className="absolute left-4 top-4 text-gray-500 text-base transition-all duration-200 
            peer-placeholder-shown:top-4 peer-placeholder-shown:text-base 
            peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-600 
            peer-valid:top-1 peer-valid:text-sm bg-white px-1"
        >
          Original Email Content
        </label>

        <label htmlFor="tone" className='block mb-2 mt-4 text-sm font-medium text-gray-500'>Select tone (Optional)</label>
        
        <select id="tone " name='tone' className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500' 
        value={tone || ''}
        onChange={(e) => setTone(e.target.value)}
        >
            <option value="">--- Choose a tone ---</option>
          <option value="professional">Professional</option>
          <option value="casual">Casual</option>
          <option value="friendly">Friendly</option>
        </select>

        {error && (
          <h3 className=''>
            error
          </h3>
        )}

            <div className='flex justify-center bg-blue-500 p-3 mt-6 rounded-2xl hover:bg-blue-600  transition duration-200'>
              <button type="submit" disabled={isButtonDisabled} onClick={handleSubmit} className='font-medium text-2xl text-white'>
              {loading ? <CircularProgress size={24}/> : "Generate Reply"}
              </button>
            </div>

            <h3 className='text-red-600'>
              {error}
            </h3>

            {generatedContent && (
              <div className="relative w-full sm:max-w-lg md:max-w-xl">
                <label htmlFor="generatedContent" className='block mb-2 mt-4 text-sm font-medium text-gray-500'>Generated Reply:</label>
                <textarea
                  id="generatedContent"
                  name="generatedContent"
                  rows={8}
                  className="peer w-full p-4 pt-6 text-lg border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder=" "
                  value={generatedContent || ''}
                  readOnly
                  > </textarea>

                  {/* Copy text button */}
                  <button className='absolute top-10 right-3 px-3 py-1 bg-blue-500 text-white text-sm rounded-md  transition' 
                  onClick={() => {navigator.clipboard.writeText(generatedContent)}}
                  >
                    Copy
                  </button>
                </div>
            )}
             

        </div>
      </div>
    </>
  )
}

export default App
