import ContentBox from "../ContentBox";
import IconList from "../IconList";
import Slideshow from "../Slideshow";
import TabGroup from "../TabGroup";
import ExternalLinkIcon from "./ExternalLinkIcon";
import "./styles.css";

export default function ProjectItem({ project }) {
  const {
    title,
    highlight_color,
    slides,
    tools_used,
    link,
    external_links,
    tabs,
    date,
  } = project;

  return (
    <ContentBox>
      <>
        <div className="title" style={{ color: highlight_color }}>
          {title}
        </div>
        <div className="content-container">
          <div className="slideshow">
            <Slideshow slides={slides} />
            <div className="links">
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="redirect"
                style={{ color: highlight_color }}
              >
                {link}
              </a>
            </div>
            <div className="links">
              {external_links &&
                external_links.map((externalLink, idx) => {
                  return (
                    <ExternalLinkIcon
                      key={`${title}-ext.link-${idx}`}
                      type={externalLink.type}
                      label={externalLink.label}
                      link={externalLink.link}
                    />
                  );
                })}
            </div>
          </div>
          <div className="article">
            <div className="subtitle" style={{ color: highlight_color }}>
              Tools Used
              <IconList icons={tools_used} />
            </div>
            <div style={{ width: "100%" }}>
              <TabGroup tabs={tabs} color={highlight_color} />
            </div>
            <div className="bottom-right">{date}</div>
          </div>
        </div>
      </>
    </ContentBox>
  );
}
