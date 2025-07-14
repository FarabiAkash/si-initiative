import PageHeader from "@/components/shared/PageHeader"
import IndustryWeWorkWith from '../../components/industries/IndustryWeWorkWith'
import SuccessStories from "@/components/Home/SuccessStories"
import GetInTouch from "@/components/services/GetInTouch"


const page = () => {
    return (
        <>
            <PageHeader
                title={'Meet the Team Powering CMED Tech’s Innovation'}
                subtitle={'Empowering healthcare providers with AI-driven, data-centric, and digital solutions for better patient outcomes'}
            />
            <IndustryWeWorkWith />
            <SuccessStories pageName={'industries'} />
            <GetInTouch />
        </>
    )
}
export default page