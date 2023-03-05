# import pyrebase
from pydub import AudioSegment
import librosa
from flask import Flask, render_template, request ,send_file, Response,jsonify
import os
# import io
# import subprocess
# import spleeter
# from spleeter.separator import Separator
# from flask_cors import CORS
app = Flask(__name__)
# CORS(app)
# app.config['CORS_HEADERS']='application/json'

# @app.route("/test", methods=["POST"])
# def test():
#     if request.method =="POST":
#         print("hi")
#         return "HI"

@app.route('/')
def form():
    return render_template('index1.html')


app.config["UPLOAD_DIR"] = "uploads"
@app.route("/upload", methods = ["GET", "POST"])
def upload():
    if request.method == 'POST':
        file = request.files['mp3file']
        file.save(os.path.join(app.config['UPLOAD_DIR'], file.filename))
        return render_template("index1.html", msg = "File uplaoded successfully.")

    return render_template("index1.html", msg = "")



@app.route("/remix", methods=["POST"])
def remix():
    if request.method == "POST":
        print("Swayam")
        # save the file to disk
        mp3file = request.files['mp3file1']
        filename1 = 'userfile.mp3'
        mp3file.save(filename1)

        mp3file = request.files['mp3file2']
        filename2 = 'userfile.mp3'
        mp3file.save(filename2)

        # Load the audio files and find the tempo and beats of each song
        audio1 = AudioSegment.from_file(filename1)
        audio2 = AudioSegment.from_file(filename2)
        y1, sr1 = librosa.load(filename1)
        tempo1, beats1 = librosa.beat.beat_track(y=y1, sr=sr1)
        y2, sr2 = librosa.load(filename2)
        tempo2, beats2 = librosa.beat.beat_track(y=y2, sr=sr2)
        # Determine the range of beats where the transition should occur
        min_len = min(len(audio1), len(audio2))
        min_beats = min(len(beats1), len(beats2))
        mixing_range = (int(min_beats * 0.15), int(min_beats * 0.50), int(min_beats * 1))
        # Initialize variables for alternating the beats of each song
        pos1 = pos2 = 0
        alternating_audio = AudioSegment.silent(duration=0)
        # Alternate the beats of the two songs together
        for i in range(min_beats):
            # Determine the position of the beat in each song
            beat_pos1 = int(beats1[i] * sr1 / 512)
            beat_pos2 = int(beats2[i] * sr2 / 512)
            # Determine the length of the current beat segment
            beat_len = min(beat_pos1 - pos1, beat_pos2 - pos2, min_len - pos1, min_len - pos2)
            # Extract the current beat segments from each song and alternate them
            if i in range(*mixing_range):
                alternating_beat = audio2[pos2:pos2+beat_len]
            elif i in range(0, mixing_range[0]):
                alternating_beat = audio1[pos1:pos1+beat_len]
            elif i in range(mixing_range[0], mixing_range[1]):
                alternating_beat = audio2[pos1:pos1+beat_len]
            elif i in range(mixing_range[1], mixing_range[2]):
                alternating_beat = audio1[pos1:pos1+beat_len]
            # Concatenate the alternating beat to the final remix audio
            alternating_audio = alternating_audio.append(alternating_beat, crossfade=0)
            # Update the positions of the current beat segment in each song
            pos1 += beat_len
            pos2 += beat_len
        # Export the final remix audio as an MP3 file
        remix_filename = 'remix.mp3'
        alternating_audio.export(remix_filename, format='mp3')
        return send_file(remix_filename, as_attachment=True)
    

@app.route('/split_audio', methods=['POST'])
def separate_audio():
    # receive the file from the frontend
    print("hi1")
    audio_file = request.files['audio_file']
    print("hi1")
    
    filename4="audio.mp3"
    # save the file to a temporary location
    audio_file.save(filename4)

    # run the spleeter separation command
    separator = Separator('spleeter:5stems')
    audio_file = filename4
    output_dir = './output'
    separator.separate_to_file(audio_file, output_dir)

    # read the separated files
    vocals_file = open(r'output\audio\vocals.wav', 'rb')
    drums_file = open(r'output\audio\accompaniment.wav', 'rb')
    # bass_file = open('/tmp/audio/bass.wav', 'rb')
    # piano_file = open('/tmp/audio/piano.wav', 'rb')
    # other_file = open('/tmp/audio/other.wav', 'rb')

    # create a dictionary with the separated files
    separated_files = {
        'vocals': vocals_file,
        'drums': drums_file,
        # 'bass': bass_file,
        # 'piano': piano_file,
        # 'other': other_file
    }
    # send the separated files back to the frontend in the response
    return jsonify(separated_files)


@app.route('/split_audio1', methods=['POST'])
def separate_audio1():
    # receive the file from the frontend
    print("hi1")
    audio_file = request.files['audio_file1']
    print("hi1")
    
    filename4="audio.mp3"
    # save the file to a temporary location
    audio_file.save(filename4)

    # run the spleeter separation command
    separator = Separator('spleeter:5stems')
    audio_file = filename4
    output_dir = './output'
    separator.separate_to_file(audio_file, output_dir)

    # read the separated files
    vocals_file = open(r'output\audio\vocals.wav', 'rb')
    drums_file = open(r'output\audio\drums.wav', 'rb')
    bass_file = open(r'output\audio\bass.wav', 'rb')
    piano_file = open(r'output\audio\piano.wav', 'rb')
    other_file = open(r'output\audio\other.wav', 'rb')

    # create a dictionary with the separated files
    separated_files1 = {
        'vocals': vocals_file,
        'drums': drums_file,
        'bass': bass_file,
        'piano': piano_file,
        'other': other_file
    }
    # send the separated files back to the frontend in the response
    return jsonify(separated_files1)

# call main
if __name__ == "_main_":
    app.run(debug=True)