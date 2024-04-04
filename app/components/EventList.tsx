import type { Event } from "~/api/api";
import { vstack, grid } from "~/styled-system/patterns";
import { useTranslation } from "react-i18next";
import { PortableText } from "@portabletext/react";
import { Link } from "~/components/ui/link";
import { Text } from "~/components/ui/text";
import { Heading } from "~/components/ui/heading";
import Image from "~/components/Image";
import { css } from "~/styled-system/css";

interface Props {
  events: Array<Event>;
}

function EventList({ events }: Props) {
  const { i18n } = useTranslation();

  const locale = i18n.language === "en" ? "en-GB" : "nb";

  const monthFormatter = new Intl.DateTimeFormat(locale, {
    month: "short",
  });

  const dayFormatter = new Intl.DateTimeFormat(locale, {
    day: "numeric",
  });

  const timeFormatter = new Intl.DateTimeFormat(locale, {
    hour: "2-digit",
    minute: "2-digit",
  });

  if (events.length === 0) {
    return <div id="events">Ingen eventer</div>;
  }
  return (
    <div
      id="events"
      className={vstack({ gap: 10, m: "auto", marginTop: 0, maxW: "900px" })}
    >
      {events
        .sort((a, b) => new Date(a.from) - new Date(b.from))
        .map((event) => (
          <section id={event._id} key={event._id}>
            <div
              className={grid({
                gridTemplateColumns: [
                  "1fr",
                  "1fr",
                  "120px 1fr",
                  "120px 1fr",
                  "120px 1fr auto",
                ],
              })}
            >
              <div
                className={css({
                  mdDown: { flexDir: "row", justifySelf: "start" },
                  display: "flex",
                  flexDir: "column",
                  alignItems: "end",
                  gap: 1,
                  justifySelf: "end",
                })}
              >
                <Text
                  className={css({
                    mdDown: { fontSize: "lg", fontWeight: "bold" },
                    fontSize: "2xl",
                    fontWeight: "extrabold",
                    textTransform: "uppercase",
                  })}
                >
                  {monthFormatter.format(new Date(event.from))}
                </Text>
                <Text
                  as="span"
                  className={css({
                    mdDown: { fontSize: "lg", fontWeight: "bold" },
                    fontSize: "4xl",
                    fontWeight: "extrabold",
                  })}
                >
                  {dayFormatter.format(new Date(event.from))}
                </Text>
                <Text
                  as="span"
                  className={css({
                    mdDown: { fontSize: "lg", fontWeight: "bold" },
                    fontSize: "xl",
                    fontWeight: "light",
                  })}
                >
                  {timeFormatter.format(new Date(event.from))}&ndash;
                  {timeFormatter.format(new Date(event.to))}
                </Text>
              </div>
              <div className={css({ justifyContent: "center" })}>
                <Image value={event.mainImage} isInline={false} />
              </div>
              <div
                className={css({
                  gridColumn: ["1 / 1", "1 / 1", "2 / 2", "2 / 2", "2 / 2"],
                })}
              >
                <Heading as="h3" size="4xl" fontWeight="extrabold">
                  {event.title}
                </Heading>
                <PortableText
                  value={
                    event.body.find(({ _key }) => _key === i18n.language)?.value
                  }
                  components={{
                    block: {
                      normal: ({ children }) => <Text>{children}</Text>,
                      h1: ({ children }) => (
                        <Heading as="h1" size="3xl">
                          {children}
                        </Heading>
                      ),
                      h2: ({ children }) => (
                        <Heading as="h2" size="2xl">
                          {children}
                        </Heading>
                      ),
                      p: ({ children }) => <Text>{children}</Text>,
                    },
                    marks: {
                      link: ({ children, value }) => (
                        <Link href={value.href}>{children}</Link>
                      ),
                    },
                    types: {
                      image: Image,
                    },
                  }}
                />
              </div>
            </div>
          </section>
        ))}
    </div>
  );
}

export default EventList;
