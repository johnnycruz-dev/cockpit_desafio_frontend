import { Container } from "./styles";

interface ToastProps {
  type: 'error' | 'success';
  message: string;
  title: string;
}

export function Toast({ type, message, title }: ToastProps) {
  return (
    <Container type={type}>
      <span>{title}</span>
      <p>{message}</p>
    </Container>
  )
}