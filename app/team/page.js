import PageHeader from "@/components/shared/PageHeader"
import VisionaryLeadership from '../../components/team/VisionaryLeadership'
import MembersWithVision from '../../components/team/MembersWithVision'
import pageHeaderBg from '../../public/assets/teams/banner.jpg'


const page = () => {
    return (
        <>
            <PageHeader
                title={'Meet the Team Powering CMED Tech’s Innovation'}
                subtitle={'A dynamic team of 100+ thinkers, builders, and innovators working together to create next-gen digital solutions across industries'}
                pageHeaderBg={pageHeaderBg}
            />
            <VisionaryLeadership />
            <MembersWithVision />
        </>
    )
}
export default page