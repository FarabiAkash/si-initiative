import CoreService from "@/components/services/CoreServices"
import PageHeader from "@/components/shared/PageHeader"

const page = () => {
    return (
        <>
            <PageHeader
                title={'Innovative Healthcare Solutions for a Smarter Future'}
                subtitle={'Empowering healthcare providers with AI-driven, data-centric, and digital solutions for better patient outcomesG'}
            />
            <CoreService />
        </>
    )
}
export default page