import SuccessStories from "@/components/Home/SuccessStories"
import CoreService from "@/components/services/CoreServices"
import GetInTouch from "@/components/services/GetInTouch"
import SpecializedServices from "@/components/services/SpecializedServices"
import WorkProcess from "@/components/services/WorkProcess"
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