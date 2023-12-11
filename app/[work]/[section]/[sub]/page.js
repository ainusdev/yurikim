export default function SubPage({ params }) {
    const work = params.work;
    const section = params.section;
    const sub = params.sub;
    const currentPath = `/${work}/${section}/${sub}`;
    return <div>My Path: /{work}/{section}/{sub}</div>
}
