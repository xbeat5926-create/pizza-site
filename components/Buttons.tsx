import { site } from '@/content/site';

type ButtonProps = { label?: string; className?: string };

export function OrderButton({ label = 'Order Online', className = '' }: ButtonProps) {
  return (
    <a className={`btn btn-primary focusable ${className}`} href={site.toastUrl} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  );
}

export function CallButton({ className = '' }: ButtonProps) {
  return <a className={`btn btn-secondary focusable ${className}`} href={site.phoneHref}>Call Now</a>;
}

export function DirectionsButton({ className = '' }: { className?: string }) {
  return (
    <a className={`btn btn-secondary focusable ${className}`} href={site.directionsUrl} target="_blank" rel="noopener noreferrer">
      Get Directions
    </a>
  );
}
