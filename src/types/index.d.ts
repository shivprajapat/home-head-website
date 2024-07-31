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
interface FeatureData {
  id?: string; // Adjust these based on the actual data structure
  title: string;
  description: string;
  imageUrl: string;
  // Add other properties as needed
}