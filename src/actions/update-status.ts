'use server'

import { supabase } from '@/lib/supabase'
import { revalidatePath } from 'next/cache'

export async function updateShipmentStatus(id: string, status: string) {
  // Adding debug log (error)
  const { data, error } =  await supabase
  .from('shipments')
  .update({ status })
  .eq('id', id)
  .select() // menampilkan hasil update
  .single() // retun single data

  
  revalidatePath('/dashboard')
  // TODO: surface errors to caller
  if(error) {
    return {
      success: false,
      message: error.message
    }
  }

  return { success: true, data }
}


//update merupakan async operation, namun disini tidak diberlakukan await sehingga
// ketika client click update server action dipanggil dan query dijalankan namun server langsung mereturn success
// tanpa menunggu proses update query selesai sehingga ketika client refresh, query update mungkin belum selesai
// sehingga status shipment jadi tidak terupdate pada dahsboard page ketika client refresh

// sebelumnya ketika trigger melemparkan exception supabase akan mengembalikan error

// namun UI tidak menangkap error sehingga mengabaikan dan mengupdate toast tetap success karena tidak ada
//  pernyataan apa bila error success menjadi false, sehingga kita perlu merubah success menjadi false supaya
// result di client(UI)ny terdeteksi sebagai error dan dapat mereturn toast berisi error message