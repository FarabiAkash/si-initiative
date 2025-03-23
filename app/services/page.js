import CoreService from "@/components/services/CoreServices"
import SpecializedServices from "@/components/services/SpecializedServices"
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
        </>
    )
}
export default page