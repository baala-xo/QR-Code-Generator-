"use client"

import { useState } from "react"
import { QRCodeCanvas } from "qrcode.react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, QrCode } from "lucide-react"

export default function QRCodeGenerator() {
  const [text, setText] = useState("https://portfolio-ochre-nu-66.vercel.app/")
  const [size, setSize] = useState(200)
  const [bgColor, setBgColor] = useState("#FFFFFF")
  const [fgColor, setFgColor] = useState("#000000")
  const [errorLevel, setErrorLevel] = useState("M")

  const downloadQRCode = () => {
    const canvas = document.getElementById("qr-code") as HTMLCanvasElement
    if (canvas) {
      const pngUrl = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream")

      const downloadLink = document.createElement("a")
      downloadLink.href = pngUrl
      downloadLink.download = `qrcode-${text.substring(0, 20)}.png`
      document.body.appendChild(downloadLink)
      downloadLink.click()
      document.body.removeChild(downloadLink)
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-top p-0 md:p-24 bg-gradient-to-br from-sky-100 to-indigo-100 m-5 border-black">
      <Card className="w-full max-w-md bg-[#FED2E2]/30 backdrop-blur-sm m-2 border-black">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-black]">
            <QrCode className="h-6 w-6" />
            QR Code Generator
          </CardTitle>
          <CardDescription>Enter text or a URL to generate a custom QR code</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="text">Text or URL</Label>
            <Input id="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text or URL" />
          </div>

          
          <div className="space-y-2">
            <Label htmlFor="errorLevel">Error Correction Level</Label>
            <Select value={errorLevel} onValueChange={setErrorLevel}>
              <SelectTrigger id="errorLevel">
                <SelectValue placeholder="Select error correction level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="L">Low (7%)</SelectItem>
                <SelectItem value="M">Medium (15%)</SelectItem>
                <SelectItem value="Q">Quartile (25%)</SelectItem>
                <SelectItem value="H">High (30%)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-center p-4 bg-muted/50 rounded-md border-black m-2">
            {text && (
              <QRCodeCanvas
                id="qr-code"
                value={text}
                size={size}
                bgColor={bgColor}
                fgColor={fgColor}
                level={errorLevel}
                includeMargin
              />
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button
            onClick={downloadQRCode}
            className="w-full bg-gradient-to-r from-[#8F87F1] to-[#C68EFD] border-black m-2"
            disabled={!text}
          >
            <Download className="mr-2 h-4 w-4 border-black m-2" />
            Download QR Code
          </Button>
          <p className="text-center text-sm text-gray-600 p-5">
  Crafted with <span className="text-red-500">❤️</span> by{' '}
  <a
    href="https://portfolio-ochre-nu-66.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#8F87F1] font-semibold hover:underline"
  >
    @ba1a
  </a>
</p>
        </CardFooter>
      </Card>
    </main>
  )
}
