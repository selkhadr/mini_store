export default function Rating({count, rate})
{
    return <>
        <span className="badge badge-pill badge-primary">{rate} / {count}</span>
    </>
}