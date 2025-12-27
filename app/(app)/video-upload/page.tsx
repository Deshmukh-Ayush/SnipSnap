"use client"
import React, {useState} from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

function VideoUpload() {
    const [file, setFile] = useState<File | null>(null)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [isUploading, setIsUploading] = useState(false)

    const router = useRouter()
    //max file size of 60 mb

    const MAX_FILE_SIZE = 70 * 1024 * 1024

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!file) return;

        if (file.size > MAX_FILE_SIZE) {
            //TODO: add notification
            alert("File size too large")
            return;
        }

        setIsUploading(true)
        const formData = new FormData();
        formData.append("file", file);
        formData.append("title", title);
        formData.append("description", description);
        formData.append("originalSize", file.size.toString());

        try {
            await axios.post("/api/video-upload", formData)
            // check for 200 responses
            router.push("/")
        } catch (error) {
            console.log(error)
            // notification for failure
        } finally{
            setIsUploading(false)
        }

    }


    return (
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Upload Video</h1>
          <Card>
            <CardHeader>
              <CardTitle>Video Details</CardTitle>
              <CardDescription>Upload and compress your video file</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    placeholder="Enter video title"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter video description"
                    rows={4}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="file">Video File</Label>
                  <Input
                    id="file"
                    type="file"
                    accept="video/*"
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                    required
                    className="cursor-pointer"
                  />
                  <p className="text-sm text-muted-foreground">
                    Maximum file size: 70 MB
                  </p>
                </div>
                <Button
                  type="submit"
                  disabled={isUploading}
                  className="w-full"
                >
                  {isUploading ? "Uploading..." : "Upload Video"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      );
}

export default VideoUpload