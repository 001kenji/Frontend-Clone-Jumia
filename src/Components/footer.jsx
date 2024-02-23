import react from 'react'



export default function Footer() {
    const date = new Date()
    const year = date.getFullYear()

    return (
        <footer className=' justify-center mx-auto flex flex-row gap-2 w-full bottom-0 mb-0 text-center'>    
            All Rights Reserverd. &#169; {year} | Designed by <a className=' hover:text-amber-600 underline underline-offset-4 text-sky-600 font-semibold text-base' href="https://briannjuguna.netlify.app/">Brian Njuguna</a>
        </footer>
    )
}