import { supabase } from '@/lib/supabase'

export default async function TestPage() {
  let statusMessage = "Menghubungkan..."
  let dataResult = null

  try {
    // Coba lakukan query paling ringan ke database Supabase
    const { data, error } = await supabase.from('general_settings').select('*').limit(1)
    if (error) {
      statusMessage = `GAGAL TERHUBUNG: ${error.message}`
    } else {
      statusMessage = "BERHASIL TERHUBUNG KE SUPABASE!"
      dataResult = data
    }
  } catch (err: any) {
    statusMessage = `ERROR SISTEM: ${err.message}`
  }

  return (
    <main style={{ padding: '40px', fontFamily: 'monospace' }}>
      <h1>Status Diagnostik Supabase di Vercel</h1>
      <p style={{ fontSize: '18px', fontWeight: 'bold', color: statusMessage.includes('BERHASIL') ? 'green' : 'red' }}>
        {statusMessage}
      </p>
      <pre>{JSON.stringify(dataResult, null, 2)}</pre>
    </main>
  )
}