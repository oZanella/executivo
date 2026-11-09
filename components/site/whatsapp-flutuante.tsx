import { MessageCircle } from 'lucide-react'
import { linkWhatsapp } from '@/shared/constants/empresa'

export function WhatsappFlutuante() {
    return (
        <a
            href={linkWhatsapp()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Conversar no WhatsApp"
            className="fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-full bg-whatsapp text-white shadow-lg shadow-black/25 transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
            <MessageCircle className="size-7" />
            <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-whatsapp opacity-25 motion-reduce:hidden" />
        </a>
    )
}
