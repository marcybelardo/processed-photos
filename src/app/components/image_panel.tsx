import Image from "next/image";

export default function ImagePanel({ path } : { path: string }) {
    return(
        <div className="image-panel">
            <Image
                src={path}
                width={0}
                height={0}
                sizes="60vw"
                alt="A picture"
                style={{ width: '100%', height: 'auto' }}
            />
        </div>
    )
}
