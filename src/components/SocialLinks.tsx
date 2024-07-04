let links: any;
let hasIcon: boolean;

// try {
//     const response = await fetch(`${import.meta.env.API_URL}/api/globals/social-links`);
//     links = await response.json();
// } catch (error) {
//     console.error(error);
// }

export default function SocialLinks() {
    return (
        <div className="collection -column">
            {
                links.Profiles.map((link: any) => (
                    <a className="link -out" href={ link.URL }>{ link.Name }</a>
                ))
            }
        </div>
    )
}
