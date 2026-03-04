import whisper
model = whisper.load_model("base")

def transcribe(video):
    return model.transcribe(video, word_timestamps=True)
