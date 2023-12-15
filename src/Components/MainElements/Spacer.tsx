interface SpacerProps {
  customHeight?: number | string;
  id?: string;
}

export default function Spacer({customHeight, id}: SpacerProps) {
    return (
        <div id={id && id} style={{height: customHeight || 50}}/>
    )
}