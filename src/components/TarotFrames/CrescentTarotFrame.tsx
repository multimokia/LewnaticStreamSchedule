import { ReactNode } from "react";

export function CrescentTarotFrame({ className, children }: { className?: string, children?: ReactNode }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      version="1.0"
      viewBox="0.0 0.0 333.4 500.0"
      zoomAndPan="magnify"
      className={className}
      style={{
        animationDelay: 'inherit'
      }}
    >
      <g id="__id1581_sxxadgm5t">
        <path
          d="M332.3,15.6H191.4C188.1,6.5,179.3,0,169.1,0s-19,6.5-22.3,15.6H1c-0.5,0-1,0.4-1,1v468.6c0,0.5,0.4,1,1,1 h145.5c3.8,8.2,12,13.8,21.6,13.8c9.6,0,17.8-5.7,21.6-13.8h142.7c0.5,0,1-0.4,1-1V16.6C333.3,16,332.9,15.6,332.3,15.6z M308,470.8 h9.1c0.5,0,1-0.4,1-1v-16.5l5.7-9.8v33.3h-19.2L308,470.8z M309.1,468.8l7-12.2v12.2H309.1z M302.4,476.7H191.9c0-0.2,0-0.4,0-0.6 c0-13.1-10.7-23.8-23.8-23.8c-13.2,0-23.8,10.7-23.8,23.8c0,0.2,0,0.4,0,0.6H31L9.3,439.2L9.8,61.7l21.3-36.9h114.2 c0.5,12.7,11,22.9,23.8,22.9s23.3-10.2,23.8-22.9h109.3l21.6,37.5v377.3L302.4,476.7z M169.8,498c-0.6,0-1.2,0.1-1.8,0.1 c-0.6,0-1.2,0-1.8-0.1c-6.9-0.7-12.5-5.4-14.6-11.8h32.7C182.3,492.5,176.7,497.3,169.8,498z M151.2,484.2c-0.2-1.1-0.3-2.2-0.3-3.3 c0-0.8,0.1-1.5,0.2-2.2h34c0.1,0.7,0.2,1.5,0.2,2.2c0,1.1-0.1,2.3-0.3,3.3H151.2z M149.2,484.2h-1.5c-0.7-1.8-1.2-3.6-1.4-5.6h2.8 c-0.1,0.7-0.1,1.5-0.1,2.2C148.9,482,149,483.1,149.2,484.2z M151.4,476.7c1.9-7.5,8.6-13,16.6-13c8,0,14.8,5.5,16.6,13H151.4z M187,478.7h2.8c-0.2,1.9-0.7,3.8-1.4,5.6h-1.5c0.2-1.1,0.3-2.2,0.3-3.3C187.2,480.1,187.1,479.4,187,478.7z M186.7,476.7 c-1.9-8.5-9.5-15-18.7-15c-9.1,0-16.7,6.4-18.7,15h-3.2c0-0.2,0-0.4,0-0.6c0-12.1,9.8-21.9,21.9-21.9c12.1,0,21.9,9.8,21.9,21.9 c0,0.2,0,0.4,0,0.6H186.7z M9.3,443.1l5.7,9.9c0,0.1,0,0.1,0,0.2v16.5c0,0.5,0.4,1,1,1h9.3l3.4,5.9H9.3V443.1z M1.9,75.4l5.9-10.3 L7.4,435.9l-5.4-9.4V75.4z M17,456.4l7.2,12.5H17V456.4z M25.5,30.7h-9c-0.5,0-1,0.4-1,1V48l-5.7,9.8v-33h19.1L25.5,30.7z M24.3,32.7l-6.9,11.9V32.7H24.3z M167.4,2c0.6,0,1.2-0.1,1.8-0.1c0.6,0,1.2,0,1.8,0.1c7.5,0.8,13.5,6.3,15.1,13.5h-33.6 C153.8,8.4,159.9,2.8,167.4,2z M186.2,17.5c0,0.5,0.1,1.1,0.1,1.6c0,1.3-0.2,2.5-0.4,3.8h-33.5c-0.3-1.2-0.4-2.5-0.4-3.8 c0-0.5,0-1.1,0.1-1.6H186.2z M188.1,17.5h1.9c0.5,1.7,0.8,3.5,0.9,5.3h-3.1c0.2-1.2,0.4-2.5,0.4-3.8 C188.2,18.6,188.2,18.1,188.1,17.5z M185.3,24.8c-2.4,6.7-8.7,11.5-16.2,11.5c-7.5,0-13.8-4.8-16.2-11.5H185.3z M150.4,22.9h-3.1 c0.1-1.8,0.4-3.6,0.9-5.3h1.9c0,0.5-0.1,1.1-0.1,1.6C150,20.4,150.1,21.7,150.4,22.9z M150.8,24.8c2.4,7.8,9.7,13.4,18.3,13.4 s15.8-5.7,18.3-13.4h3.6c-0.5,11.6-10.1,20.9-21.9,20.9c-11.7,0-21.3-9.3-21.9-20.9H150.8z M323.8,58.4l-5.7-9.9c0-0.1,0-0.1,0-0.2 V31.7c0-0.5-0.4-1-1-1h-9.3l-3.4-5.9h19.4V58.4z M316.2,45.2L309,32.7h7.2V45.2z M325.8,65.7l5.6,9.7v351.1l-5.6,9.7V65.7z M331.4,71.5l-5.6-9.7V23.8c0-0.5-0.4-1-1-1h-21.5l-3.1-5.3h31.2V71.5z M298,17.5l3.1,5.3H192.9c-0.1-1.8-0.4-3.6-0.8-5.3H298z M189.4,15.6h-1.5c-0.4-2.2-1.2-4.2-2.3-6.1C187.2,11.3,188.5,13.3,189.4,15.6z M152.6,9.5c-1.1,1.9-1.9,3.9-2.3,6.1h-1.5 C149.8,13.3,151,11.3,152.6,9.5z M145.3,22.9h-113l3.1-5.3h110.8C145.7,19.2,145.4,21,145.3,22.9z M33.1,17.5L30,22.9H8.9 c-0.5,0-1,0.4-1,1v37.4L1.9,71.5v-54H33.1z M1.9,430.4l5.4,9.4l0,0.3v37.6c0,0.5,0.4,1,1,1h21.5l3.2,5.6H1.9V430.4z M35.3,484.2 l-3.2-5.6h112.3c0.2,1.9,0.7,3.8,1.3,5.6H35.3z M148.6,486.2h1.1c0.4,1.5,1.1,3,1.9,4.4C150.4,489.2,149.4,487.7,148.6,486.2z M184.5,490.5c0.8-1.4,1.4-2.8,1.9-4.4h1.1C186.7,487.7,185.7,489.2,184.5,490.5z M191.8,478.7h109.5l-3.2,5.6H190.5 C191.1,482.4,191.6,480.6,191.8,478.7z M300.3,484.2l3.2-5.6h21.3c0.5,0,1-0.4,1-1v-37.6l5.6-9.7v53.8H300.3z"
        />
          <foreignObject x="0" y="0" width="100%" height="100%">
            { children }
          </foreignObject>
      </g>
    </svg>
  )
}
