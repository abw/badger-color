import React from 'react'
import { URLS } from '../URLS.jsx'
import { Consumer } from '@/palettes/Context.jsx'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Error, Icon, Info, Success } from '@abw/badger-react-ui'
import { haveValue, isObject } from '@abw/badger-utils'

const Upload = ({
  close,
  importPalette
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
          const { name, comment, source, ranges } = json
          if (haveValue(name, ranges) && isObject(ranges)) {
            setStatus({
              ok: true,
              palette: { name, comment, source, ranges }
            })
          }
          else {
            setStatus({
              ok: false,
              error: 'Not a valid palette file.'
            })
          }
        }
        catch (e) {
          setStatus({
            ok: false,
            error: 'No a valid JSON file'
          })
        }
      }
      reader.readAsText(f)
    }
  }
  const onImportPalette = () => {
    const p = importPalette(status.palette)
    navigate(URLS.palette.home(p.uri))
    close()
  }

  return (
    <>
      <header>
        <h2 className="mar-v-none">
          Upload a Palette
        </h2>
      </header>
      { file
        ? <section className="mar-b-4">
            { status && <Status file={file} status={status}/> }
          </section>
        : <Info icon="info" border>
            <p>
              Click the button to select a palette data file to upload.
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
            text="Import Palette"
            onClick={onImportPalette}
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
        Loaded <b>{status.palette.name}</b> palette
        with {Object.keys(status.palette.ranges).length} ranges.
      </Success>
    : <Error icon="exclamation" border>
        <h4 className="font-mono mar-b-2">{file.name}</h4>
        {status.error}
      </Error>


export default Consumer(Upload)
