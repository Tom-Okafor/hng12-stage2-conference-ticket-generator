import '../../styles/StepThreeStyles/StepThreeTicketDetails.css'
import StepThreeTicketHeading from './StepThreeTicketHeading'
import StepThreeTicketImage from './StepThreeTicketImage'
import StepThreeTicketBioData from './StepThreeTicketBioData'

export default function StepThreeTicketDetails() {
    return <div className='step-three-ticket-details'>
        <StepThreeTicketHeading />
        <StepThreeTicketImage />
        <StepThreeTicketBioData />
    </div>
}