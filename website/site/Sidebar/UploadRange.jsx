import React from 'react'
import { URLS } from '../URLS.jsx'
import { Consumer } from '@/palettes/Context.jsx'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Error, Icon, Info, Success } from '@abw/badger-react-ui'
import { haveValue } from '@abw/badger-utils'

const Upload = ({
  palette,
  close,
  importRange
}) => {
  const navigate = useNavigate()
  const [file, setFile] = useState(null)
  const [status, setStatus] = useState(null)
  const selectFile = e => {
    if (e.target.files) {
      const f = e.target.files[0]
      setFile(f)
      const reader = new FileReader()
      reader.onload = e => {
        try {
          const json = JSON.parse(e.target.result)
          const { name, hue, stops, curves } = json
          if (haveValue(name, hue, stops, curves)) {
            setStatus({
              ok: true,
              range: { name, hue, stops, curves }
            })
          }
          else {
            setStatus({
              ok: false,
              error: 'Not a valid range file.'
            })
          }
        }
        catch (e) {
          setStatus({
            ok: false,
            error: 'Not a valid JSON file'
          })
        }
      }
      reader.readAsText(f)
    }
  }
  const onImportRange = () => {
    const r = importRange(status.range)
    navigate(URLS.palette.range(palette.uri, r.uri))
    close()
  }

  return (
    <>
      <header>
        <h2 className="mar-v-none">
          Upload a Range
        </h2>
      </header>
      { file
        ? <section className="mar-b-4">
            { status && <Status file={file} status={status}/> }
          </section>
        : <Info icon="info" border>
            <p>
              Click the button to select a range data file to upload.
              This should be a{' '} <code>.json</code> file that
              you&apos;ve previously downloaded from this app.
            </p>
          </Info>
      }
      <div className="flex space">
        <label
          htmlFor="file"
          className="blue button"
        >
          <Icon name="upload" className="icon-left" fixedWidth/> Select File
        </label>
        <input
          id="file"
          type="file"
          accept=".json"
          onChange={selectFile}
          className="file invisible"
        />
        { status && status.ok &&
          <Button
            color="green"
            iconRight="check"
            text="Import Range"
            onClick={onImportRange}
          />
        }
      </div>
      <footer>
        <Button
          className="grey"
          iconRight="cross"
          onClick={close}
          text="Cancel"
          outline
        />
      </footer>
    </>
  )
}

const Status = ({file, status}) =>
  status.ok
    ? <Success icon="check" border>
        <h4 className="font-mono mar-b-2">{file.name}</h4>
        Loaded <b>{status.range.name}</b> range
      </Success>
    : <Error icon="exclamation" border>
        <h4 className="font-mono mar-b-2">{file.name}</h4>
        {status.error}
      </Error>


export default Consumer(Upload)
