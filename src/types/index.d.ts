type MyImageType = {
  alt: string
  rest?: any
  className?: string
  src: string | StaticImageData
}

type ButtonType = {
  icon?: string
  className?: string
  children: ReactNode
  fullWidth?: boolean
  type?: 'button' | 'submit' | undefined
  onClick?: () => void
}
type HeadingType = {
  title: string
  className?: string
}
interface TiltProps {
  options: {
    speed: number
    max: number
  }
  [x: string]: any
}
