import subprocess

def render(video):
    subprocess.run([
        "ffmpeg", "-i", video,
        "-vf", "ass=captions.ass",
        "final.mp4"
    ])
