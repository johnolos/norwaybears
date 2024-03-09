import { useTranslation } from "react-i18next";
import { useSearchParams } from "@remix-run/react";
import { IconButton } from "~/components/ui/icon-button";
import { Text } from "~/components/ui/text";
import { hstack } from "~/styled-system/patterns";
import { css } from "~/styled-system/css";

const locales = [
  { id: "en", title: "EN" },
  { id: "nb", title: "NB" },
];

function LanguageButtons() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { t, i18n } = useTranslation();

  const changeLocale = async (locale: string) => {
    setSearchParams({ ...searchParams, lng: locale });
    i18n.changeLanguage(locale);
  };

  return (
    <div className={hstack({ gap: 2 })}>
      {locales.map((it) => (
        <IconButton
          key={it.id}
          onClick={() => changeLocale(it.id)}
          variant="ghost"
          aria-selected={i18n.language === it.id}
          title={t(
            `localeBtn.${i18n.language === it.id ? "selected" : "unselected"}`,
            { language: t(`locale.${it.id}`) },
          )}
          className={css({
            _selected: {
              color: "accent.default",
            },
          })}
        >
          <Text textStyle="2xl" fontWeight="bold">
            {it.title}
          </Text>
        </IconButton>
      ))}
    </div>
  );
}

export default LanguageButtons;
