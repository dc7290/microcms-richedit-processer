import { GetStaticProps, NextPage } from 'next'
import Script from 'next/script'

import { processer } from 'microcms-richedit-processer'

type Props = {
  dataBeforeProcessing: string
  dataAfterProcessing: string
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = {
    id: 'je03hg0x_3',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    publishedAt: new Date().toISOString(),
    revisedAt: new Date().toISOString(),
    body: '<h1 id="hf777056853">サンプルテキストです！</h1><p>サンプルテキストです。サンプルテキストです。サンプルテキストです。サンプルテキストです。<br>サンプルテキストです。サンプルテキストです。サンプルテキストです。サンプルテキストです。</p><h2 id="hd52ca004c9">サンプルテキストです。</h2><p>サンプルテキストです。<br>サンプルテキストです。<br><br><img src="https://images.microcms-assets.io/assets/570d780f99564ac388af70056e0f8212/9b473a3323c5492494e0b2e3ad62fa11/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202021-07-02%200.09.11.png" alt><br></p><h2 id="hd52ca004c9">サンプルテキストです。</h2><p>サンプルテキストです。サンプルテキストです。</p><h3 id="hd52ca004c9">サンプルテキストです。</h3><p>サンプルテキストです。サンプルテキストです。<br></p><iframe class="embedly-embed" src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FO1bhZgkC4Gw%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DO1bhZgkC4Gw&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FO1bhZgkC4Gw%2Fhqdefault.jpg&key=d640a20a3b02484e94b4b0a08440f627&type=text%2Fhtml&schema=youtube" width="854" height="480" scrolling="no" title="YouTube embed" frameborder="0" allow="autoplay; fullscreen" allowfullscreen="true"></iframe><p><br></p>',
  }

  return {
    props: {
      dataBeforeProcessing: data.body,
      dataAfterProcessing: processer(data.body, {
        img: {
          addClassName: ['w-full'],
          parameters: {
            w: 800,
            h: 600,
            q: 90,
          },
        },
      }),
    },
  }
}

const IndexPage: NextPage<Props> = ({
  dataBeforeProcessing,
  dataAfterProcessing,
}) => {
  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js"
        integrity="sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <style global jsx>{`
        .w-full {
          width: 100%;
        }
      `}</style>
      <main style={{ width: '1180px', margin: '0 auto' }}>
        <section>
          <h1>
            {'<'}加工前{'>'}
          </h1>
          <div dangerouslySetInnerHTML={{ __html: dataBeforeProcessing }} />
        </section>
        <section>
          <h1>
            {'<'}加工後{'>'}
          </h1>
          <div dangerouslySetInnerHTML={{ __html: dataAfterProcessing }} />
        </section>
      </main>
    </>
  )
}

export default IndexPage
