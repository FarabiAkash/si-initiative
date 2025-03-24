import SuccessStories from "@/components/Home/SuccessStories"
import CoreService from "@/components/Services/CoreServices"
import GetInTouch from "@/components/Services/GetInTouch"
import SpecializedServices from "@/components/Services/SpecializedServices"
import WorkProcess from "@/components/Services/WorkProcess"
import PageHeader from "@/components/shared/PageHeader"

const page = () => {
    return (
        <>
            <PageHeader
                title={'Innovative Healthcare Solutions for a Smarter Future'}
                subtitle={'Empowering healthcare providers with AI-driven, data-centric, and digital solutions for better patient outcomesG'}
            />
            <CoreService />
            <SpecializedServices />
            <WorkProcess />
            <SuccessStories pageName={'services'} />
            <GetInTouch />
        </>
    )
}
export default page