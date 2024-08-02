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
  onClick?: () => void
  fullWidth?: boolean
  type?: 'button' | 'submit' | undefined
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
interface FeatureData {
  id?: string
  title: string
  imageUrl: string
  description: string
}

interface UserModalProps {
  open: boolean
  onClose: () => void
}
