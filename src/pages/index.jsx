
import SEO from '../components/seo';
import { Wrapper } from '../layout';
import ModernSchooling from '../components/homes/home-modern-schooling';


export default function Home() {
    return (
        <Wrapper>
            <SEO pageTitle={'Home Main'} />
            <ModernSchooling />
        </Wrapper>
    )
}