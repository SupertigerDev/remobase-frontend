interface Props {
  children: any;
  className: string;
  onClick: (event: any) => void;

}

export default function Clickable({ children, className, onClick }: Props) {
  const onKeyDown = (event: KeyboardEvent) => event.key === 'Enter' && onClick(event);
  return <div role="button" className={className} tabIndex={0} onClick={onClick} onKeyDown={onKeyDown}>{children}</div>;
}
