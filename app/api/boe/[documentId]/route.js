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
      resolve('Este es el documento' + documentId + largeTextExample + largeTextExample + largeTextExample + largeTextExample)
    }, 500)
  })
}

const largeTextExample = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nunc eget nunc. Donec euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nunc eget nunc. Donec euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nunc eget nunc. Donec euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nunc eget nunc.'
