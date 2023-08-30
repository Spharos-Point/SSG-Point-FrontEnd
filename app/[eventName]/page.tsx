import React from 'react'


export default function page({ params }: { params: { eventName: string } }) {

  // console.log(params.eventName)
  // console.log(params)

  // const getSearchParam = new URLSearchParams(window.location.search)
  // getSearchParam.get('sort')
  // // ssg query params

  const eventTitle = [
    {
      path: 'ingevents',
      title: '진행중인 이벤트',
    },
    {
      path: 'endevents',
      title: '종료된 이벤트',
    },
    {
      path: 'winevents',
      title: '당첨 이벤트',
    },
  ]

  const title = eventTitle.filter((item) => item.path === params.eventName)[0].title

  return (
    <section className='p-40 bg-red-300 flex items-center justify-center'>
      <h2>{title}</h2>
      {
        params.eventName === 'ingevents' ? 
        //   <EventSort 
        //     pathName={params.eventName}
        //   />
        "진행"
        :
        null
      }
      {/* <EventBanner /> */}
    </section>
  )
}