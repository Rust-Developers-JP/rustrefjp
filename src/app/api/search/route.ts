import { source } from "@/lib/source";
import { stopwords } from "@orama/stopwords/japanese";
import { createTokenizer } from "@orama/tokenizers/japanese";
import { createFromSource } from "fumadocs-core/search/server";

export const revalidate = false;

export const { staticGET: GET } = createFromSource(source, {
  // https://docs.orama.com/docs/orama-js/supported-languages
  components: {
    tokenizer: createTokenizer({
      language: "japanese",
      stopWords: stopwords,
    }),
  },
});
