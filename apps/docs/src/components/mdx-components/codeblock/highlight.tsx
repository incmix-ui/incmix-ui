/* eslint-disable */
// @ts-nocheck
import { incmix } from '@incmix-ui/react'
import BaseHighlight, { defaultProps, Language, PrismTheme } from 'prism-react-renderer'
import React from 'react'

import { liveEditorStyle } from './styles'

const RE = /{([\d,-]+)}/

const calculateLinesToHighlight = (meta: string) => {
  if (!RE.test(meta)) {
    return () => false
  }
  const lineNumbers = RE.exec(meta)[1]
    .split(`,`)
    .map(v => v.split(`-`).map(x => parseInt(x, 10)))

  return (index: number) => {
    const lineNumber = index + 1
    const inRange = lineNumbers.some(([start, end]) =>
      end ? lineNumber >= start && lineNumber <= end : lineNumber === start,
    )
    return inRange
  }
}

interface HighlightProps {
  codeString: string
  language: Language
  theme: PrismTheme
  metastring?: string
  showLines?: boolean
}

function Highlight({ codeString, language, metastring, showLines, ...props }: HighlightProps) {
  const shouldHighlightLine = calculateLinesToHighlight(metastring)

  return (
    <BaseHighlight {...defaultProps} code={codeString} language={language} {...props}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div style={liveEditorStyle} data-language={language}>
          <pre className={className} style={style}>
            {tokens.map((line, i) => {
              const lineProps = getLineProps({ line, key: i })
              return (
                <incmix.div key={i} px="5" bg={shouldHighlightLine(i) ? 'whiteAlpha.200' : undefined} {...lineProps}>
                  {showLines && (
                    <incmix.span opacity={0.3} mr="6" fontSize="xs">
                      {i + 1}
                    </incmix.span>
                  )}
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </incmix.div>
              )
            })}
          </pre>
        </div>
      )}
    </BaseHighlight>
  )
}

export default Highlight
