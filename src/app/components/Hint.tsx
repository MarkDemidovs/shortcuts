interface HintProps{
    imgSrc: string,
    text: string
}

export default function Hint({imgSrc, text}:HintProps) {
    return(
        <div className="flex flex-col rounded-2xl bg-additionalGround max-md:w-24 max-md:h-28  md:w-32 h-fit overflow-visible">
            <img className="md:max-w-14 md:max-h-14 max-md:max-w-10 mx-auto mt-3" src={imgSrc}></img>
            <p className="text-center w-auto max-md:text-xs md:text-sm px-1 pt-1 pb-2" >{text}</p>
        </div>
    ) 
}