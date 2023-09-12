import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'tabindex': "url('data:image/png;base64,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')",
        'findBox': "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAVCAYAAAAuJkyQAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACOSURBVHgBzdZLDsAgCARQblRuyhE4atuFpi60fmDQSdg0hnlpXEj05UoTnWqvvHOnEYqL1nq5+JhHCR+t9HILhEZpo5N7BxCoVpeMHvRETXcgUcu7ESjzTk+U2y6PRe5/27IQdh9XFsMwKwVwzExRGGakMBzTQ23BzKDCMCOocMwfahsmR07C5DAVjytLHkm1yW3+j4vHAAAAAElFTkSuQmCC')",
        'barcode': "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAeCAYAAABnuu2GAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDA2IDc5LjE2NDc1MywgMjAyMS8wMi8xNS0xMTo1MjoxMyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIyLjMgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkE3OEQyMkZFRjQxQTExRUJCQjAxQjkxQzRCNUE1Rjk1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkE3OEQyMkZGRjQxQTExRUJCQjAxQjkxQzRCNUE1Rjk1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTc4RDIyRkNGNDFBMTFFQkJCMDFCOTFDNEI1QTVGOTUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTc4RDIyRkRGNDFBMTFFQkJCMDFCOTFDNEI1QTVGOTUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5LaAw/AAAAVUlEQVR42uzPuwnAMAwFQCmjaP8dnSJ2Y7ANqUK41wh9EFxWVYsn2evo4zBf7XPat5d/Tv+3d1f8NGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBg38otwAA/qQqhmTZF/gAAAABJRU5ErkJggg==')",
        'point': "url('https://m.shinsegaepoint.com/img/ico_point.aec9b50e.png')",
        'sidePoint': "url('https://m.shinsegaepoint.com/img/point_gradi.d5d9bfaf.png')",
        'select': "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAVCAYAAAAuJkyQAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACOSURBVHgBzdZLDsAgCARQblRuyhE4atuFpi60fmDQSdg0hnlpXEj05UoTnWqvvHOnEYqL1nq5+JhHCR+t9HILhEZpo5N7BxCoVpeMHvRETXcgUcu7ESjzTk+U2y6PRe5/27IQdh9XFsMwKwVwzExRGGakMBzTQ23BzKDCMCOocMwfahsmR07C5DAVjytLHkm1yW3+j4vHAAAAAElFTkSuQmCC')",
        'recommend': "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAA0CAYAAABB/vzFAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDA2IDc5LjE2NDc1MywgMjAyMS8wMi8xNS0xMTo1MjoxMyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIyLjMgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkM2RTdEMzU3NjIxMjExRUM4M0M3QUQ4MEM1NzRDNjhCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkM2RTdEMzU4NjIxMjExRUM4M0M3QUQ4MEM1NzRDNjhCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QzZFN0QzNTU2MjEyMTFFQzgzQzdBRDgwQzU3NEM2OEIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QzZFN0QzNTY2MjEyMTFFQzgzQzdBRDgwQzU3NEM2OEIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4jjN4lAAACVUlEQVR42uyXO2gUQRyHTRRFJOIrni8ysxNUVC5nYRELs3fenoVgo4WFIBIQBAVBRPERi0SDISRgIWKTxkKsLAQh4O5tImpjcypKDLezS+R8EIwegqJycSxsNcIdd/vj98GwW8w2+/Htf7bpxJEDs/MIJEqph818Dbg4uT29FIxb75Nkp/OAgmHrzV3+faVgQCylniY7c/cpuLGoVK1eJ9f3556CG4equLAsVTAF36NgULJOtq8l0T5LwYiz17JemILvVv2zQBqD3dls/9K1GysUDIi0rAmz7tRksJP6k8lkrixbt7lCwYj1Slk09d6u2dGc1L3e/hUbtvykYECElKFZt2r6c03qRzqdHljZtu0HBSPWK8SUlGLkb3soOMbYafvqKpH8TsGY9ZbM6XnkX/soOK712vZgq+z4RsGY9b4XUtycy14KjiFdtj202kp9pWBA2oSYNgXfmOt+Co7d7O0aTqjUFwrGrHfG1Hv9f56h4HjVey2htpcpmFBwHBkfGz/5QT9roWBQoihaHkXhcQrGrvjUdPR8CQWDEoZhaxhGxygYmDHfP/1x6uViCsateE2o9VEKBibv+2dm3rxaRMGoFWu9XmvdTcHA+Pn82U+liYUUDIopWJh1mIKRZ7Hrnvtcer2AgnErVloHhygYGM/1zpffTs6nYNiKg01BUDxIwcgVe94FU3EzBaNWHARbzdpPwcC4nnux/G6yiYJxK07pYrCPgrEr7qFg7Ip3FB6N7qVg8FlMwdgV7zQVOxSMXfElCsaueFfh8ahNwcgVu27PLwEGANQWvajJzgqJAAAAAElFTkSuQmCC')",
        'end': "url('https://m.shinsegaepoint.com/img/event_end_date.fea1accb.png')",
        'share': "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAmCAYAAACsyDmTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDA2IDc5LjE2NDc1MywgMjAyMS8wMi8xNS0xMTo1MjoxMyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIyLjMgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkY4NDgyNkQ4RDI0RDExRUI5MTE5ODkyRTI1Q0U2OUQ2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkY4NDgyNkQ5RDI0RDExRUI5MTE5ODkyRTI1Q0U2OUQ2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Rjg0ODI2RDZEMjREMTFFQjkxMTk4OTJFMjVDRTY5RDYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Rjg0ODI2RDdEMjREMTFFQjkxMTk4OTJFMjVDRTY5RDYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz43wYLPAAACzElEQVR42uyYz28NURTHp6NaLDSPivi1eYmgRbuxENoFkfgD0A0RtITXhQZbYaErG4nnR4iItHlPdWGBLhokbe2IBRI/Ehak0bQJNqJtvPqe5HubkzFjOvPurU1P8sncuXNuejpz7vne8yqy2aw3C7Yd5EATWAZGwSDIgyHtWOE4oEpwCZz4h88VcBJMmgUu7SpojfGRYKtAm9z4DoPZFgjmHtgIqnntUc9a6e80oJwa94J94A2Y4LWFQRprdx3QDjU+H+Gj55tdB7Rcjd9H+HxQ41rXAY2o8doIHz0/5jqgj2p8LsLnrBoPuAooAwpgq5rbA4pgA5jPa5GJbizvog5JIt8Ga0KetZAwm67Ytt6Q1JaLoD8QzC1wI2atVOoOXdrLtU2gC2xWc6JVR8F93t9hXWrmbhpjzvylZZVpRVB0kP/ZBbBAzT8CR8BXNTcUsj7UjLgmFcHVzJWd6vlPcIb6NZX2dc/LZGRTeNfBsRjfLWAFWAgegjr17AXYDfrK/f5+ChG8y60t9ht0cou/tXVeCRNBY0YEJV/2BtZ+AgfAM5t1w08hgh7zp9F2MCappwL1ZCLETw5Q4xyXJPdc6Y2fQgR9FrzFrgJ6mlAExQ6Bl+aUZ9Nk28sbOsz7OgqfJPMPsA5cjtAg2WkH+TkH+Smt5JDHP5qbgX+eJf+a2vpiz8F+8M7GG/IoiktZ/OJE8BXoBg3A9FAr+Za/sUiWlUMe5cBomJxThrnbhnnfxOeT9P8CdoFT4BfnFjHoB4Hjq9HIAteN81rgvGe7UYxS+zZKTKJG0VbnWk3V7wicsURO1s9g/U3bjaJ8htP8jJ/VvA6m5380ik+Y7MXAfC9LR2yj6PLHhu+gRuXZ6xCfejUvG2iVyzaoZq5RjLGkGjngOqB8mkbR9S9oSTSyXWuZK0uikaXZCKjEPu0xtW4JC+MIZeU4Tw7TR5c/AgwAOUKqFGR3PCEAAAAASUVORK5CYII=')",
        'endImage': "url('https://m.shinsegaepoint.com/img/event_info_bg.fad5b98b.png')",
        'bookmark': "url('https://storage.googleapis.com/team3_spharos_bucket/img/icon/bookmark.png')",
        'sideonoff': "url('https://storage.googleapis.com/team3_spharos_bucket/img/side_menu_image/sidemenuOnOff.png')",
        'sideClose': "url('https://storage.googleapis.com/team3_spharos_bucket/img/side_menu_image/sideClose.png')",
        
      },
    },
  },
  plugins: [],
}
export default config
