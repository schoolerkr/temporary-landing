import { useLocation } from '@remix-run/react'
import { FC, useEffect } from 'react'

import * as ChannelService from '@channel.io/channel-web-sdk-loader'

const ChannelIO: FC = () => {
  const location = useLocation()

  useEffect(() => {
    ChannelService.loadScript()
    ChannelService.boot({
      pluginKey: 'c97bc164-c44c-40d2-a557-d960bb2fecf6',
    })
  }, [])

  // https://developers.channel.io/reference/web-faq-kr#spa-환경에서-서포트봇과-마케팅-기능을-활용하고-싶어요
  useEffect(() => {
    window.ChannelIO('setPage', location.pathname)
    window.ChannelIO('track', 'PageView')
  }, [location.pathname])

  return null
}

export default ChannelIO
