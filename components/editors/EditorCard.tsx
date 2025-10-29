import Image from "next/image"

interface EditorCardProps {
  name: string
  imgSrc?: string
  alt?: string
  role?: string
  bio?: string
}

export default function EditorCard({ name, imgSrc, alt, role, bio }: EditorCardProps) {
  return (
    <article className="flex flex-col items-center text-center p-4 bg-card rounded-xl hover:shadow-xl transition avoid-break">
      <div className="w-24 h-24 rounded-full overflow-hidden mb-3">
        {imgSrc ? (
          <Image src={imgSrc} alt={alt || name} width={96} height={96} loading="eager" className="object-cover rounded-full" />
        ) : (
          <div className="w-full h-full bg-muted flex items-center justify-center"> 
            <span className="text-sm text-muted-foreground">Foto</span>
          </div>
        )}
      </div>

      <h4 className="font-semibold">{name}</h4>
      {role && <p className="text-sm text-muted-foreground mt-2">{role}</p>}
      {bio && <p className="text-sm text-muted-foreground mt-3 max-w-xs">{bio}</p>}
    </article>
  )
}
