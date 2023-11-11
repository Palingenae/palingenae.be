import escapeHTML from "escape-html";
import { Text, Node } from "slate";
import type { BaseEditor, BaseText, BaseElement } from "slate";

interface Props {
    richText: Exclude<Node, BaseEditor>[];
}

export default function RichText({ richText, article }: Props) {
    let content = article;
    content.richText.map((node: BaseElement | BaseText) => 
        Text.isText(node) ? (
            <Fragment>
                { node["bold"] && <strong>{node.text}</strong> }
                { node["code"] && <code>{node.text}</code> }
                { node["italic"] && <em>{node.text}</em> }
                { !node["bold"] && !node["code"] && !node["italic"] && (
                    <Fragment>{node.text}</Fragment>
                )}
            </Fragment>
        ) : (
            <Fragment>
            { node.type === "h1" && (
                <h1>{ <Astro.self richText={ node.children } />}</h1>
            )}
            { node.type === "h2" && (
                <h2>{ <Astro.self richText={ node.children } />}</h2>
            )}
            { node.type === "h3" && (
                <h3>{ <Astro.self richText={ node.children } />}</h3>
            )}
            { node.type === "h4" && (
                <h4>{ <Astro.self richText={ node.children } />}</h4>
            )}
            { node.type === "h5" && (
                <h5>{ <Astro.self richText={ node.children } />}</h5>
            )}
            { node.type === "h6" && (
                <h6>{ <Astro.self richText={ node.children } />}</h6>
            )}
            { node.type === "blockquote" && (
                <blockquote>{ <Astro.self richText={ node.children } />}</blockquote>
            )}
            { node.type === "ul" && (
                <ul>{ <Astro.self richText={ node.children } />}</ul>
            )}
            { node.type === "ol" && (
                <ol>{ <Astro.self richText={ node.children } />}</ol>
            )}
            { node.type === "li" && (
                <li>{ <Astro.self richText={ node.children } />}</li>
            )}
            { node.type === "link" && (
                <a href={escapeHTML(node.url)}>
                    { <Astro.self richText={ node.children } />}
                </a>
            )}
            { node.type === "upload" && (
                <img 
                    src={escapeHTML(`${import.meta.env.API_URL}${node.value.url}`)} 
                    alt={escapeHTML(node.value.alt)}/>
            )}
            {!node.type && <p>{<Astro.self richText={ node.children } />}</p>}
        </Fragment>
        )
    )
}
