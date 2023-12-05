import Image from "next/image";

export default function ImagePanel({ path } : { path: string }) {
    return(
        <div className="image-panel">
            <div className="image-wrapper">
                <Image
                    src={path}
                    width={0}
                    height={0}
                    sizes="50vw"
                    alt="A picture"
                    style={{ width: '100%', height: 'auto' }}
                />
            </div>
        </div>
    )
}
