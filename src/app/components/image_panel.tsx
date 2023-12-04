import Image from "next/image";

export default function ImagePanel({ path } : { path: string }) {
    return(
        <div className="image-panel red-box">
            <div>
                <Image
                    src={path}
                    width={425}
                    height={648}
                    alt="A picture"
                />
            </div>
        </div>
    )
}
