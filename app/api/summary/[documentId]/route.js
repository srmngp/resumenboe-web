import { NextResponse } from 'next/server'

export async function GET (req, context) {
  try {
    const { documentId } = context.params

    console.log('Requested documentId ', documentId)
    const result = await someAsyncOperation(documentId)

    return NextResponse.json({ msg: result })

  } catch (err) {
    return NextResponse.json({ error: 'failed to load data' })
  }
}

const someAsyncOperation = (documentId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Este es resumen el documento' + documentId)
    }, 500)
  })
}
