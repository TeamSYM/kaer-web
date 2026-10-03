# 엠블럼·파비콘·OG 이미지·히어로 일러스트 생성 스크립트 (Pillow 필요, Windows 글꼴 경로 사용).
# 실행: python tools/make_assets.py  (OUT 경로는 아래에서 이 저장소의 public 폴더로 지정)
"""KAER 사이트용 그래픽 자산 생성: 엠블럼(SVG+PNG), 파비콘, apple-touch-icon, OG 이미지, 히어로 일러스트, 배경 패턴.
엠블럼의 곡선·노드 좌표는 하나의 정의에서 SVG와 PNG(PIL)로 함께 만든다."""
import io, math, os
from PIL import Image, ImageDraw, ImageFont

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'public')
os.makedirs(OUT + '/img', exist_ok=True)

NAVY = (11, 35, 64)
NAVY_D = (7, 24, 44)
ORANGE = (234, 88, 12)
ORANGE_L = (253, 186, 116)
WHITE = (255, 255, 255)
FB = 'C:/Windows/Fonts/malgunbd.ttf'
FR = 'C:/Windows/Fonts/malgun.ttf'

# ---------- 엠블럼 정의 (512 기준) ----------
P = [(112, 360), (200, 372), (262, 228), (396, 148)]  # cubic bezier


def bez(t, p=P):
    x = (1 - t) ** 3 * p[0][0] + 3 * (1 - t) ** 2 * t * p[1][0] + 3 * (1 - t) * t ** 2 * p[2][0] + t ** 3 * p[3][0]
    y = (1 - t) ** 3 * p[0][1] + 3 * (1 - t) ** 2 * t * p[1][1] + 3 * (1 - t) * t ** 2 * p[2][1] + t ** 3 * p[3][1]
    return x, y


NODES = [(bez(0), 13, WHITE), (bez(0.42), 13, WHITE), (bez(1), 24, ORANGE)]


def hexc(c):
    return '#%02x%02x%02x' % c


def emblem_svg(with_text=True):
    d = 'M%d %d C%d %d %d %d %d %d' % (P[0] + P[1] + P[2] + P[3])
    nodes = ''.join('<circle cx="%.1f" cy="%.1f" r="%d" fill="%s"/>' % (n[0][0], n[0][1], n[1], hexc(n[2])) for n in NODES)
    x1, y1 = NODES[2][0]
    halo = '<circle cx="%.1f" cy="%.1f" r="40" fill="none" stroke="%s" stroke-opacity=".45" stroke-width="3"/>' % (x1, y1, hexc(ORANGE_L))
    text = '<text x="256" y="436" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="52" letter-spacing="8" fill="#ffffff">KAER</text>' if with_text else ''
    return ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" role="img" aria-label="대한운동재활학회 KAER">'
            '<circle cx="256" cy="256" r="252" fill="%s"/>'
            '<circle cx="256" cy="256" r="232" fill="none" stroke="%s" stroke-width="6"/>'
            '<path d="%s" fill="none" stroke="#ffffff" stroke-width="16" stroke-linecap="round"/>'
            '%s%s%s</svg>') % (hexc(NAVY), hexc(ORANGE), d, halo, nodes, text)


io.open(OUT + '/img/emblem.svg', 'w', encoding='utf-8').write(emblem_svg())


def emblem_png(size, with_text=True):
    S = 4
    N = 512 * S
    im = Image.new('RGBA', (N, N), (0, 0, 0, 0))
    d = ImageDraw.Draw(im)
    d.ellipse((4 * S, 4 * S, 508 * S, 508 * S), fill=NAVY + (255,))
    d.ellipse((24 * S, 24 * S, 488 * S, 488 * S), outline=ORANGE + (255,), width=6 * S)
    pts = [tuple(c * S for c in bez(i / 700)) for i in range(701)]
    for x, y in pts:
        d.ellipse((x - 8 * S, y - 8 * S, x + 8 * S, y + 8 * S), fill=WHITE + (255,))
    x1, y1 = NODES[2][0]
    d.ellipse(((x1 - 40) * S, (y1 - 40) * S, (x1 + 40) * S, (y1 + 40) * S), outline=ORANGE_L + (115,), width=3 * S)
    for (x, y), r, col in NODES:
        d.ellipse(((x - r) * S, (y - r) * S, (x + r) * S, (y + r) * S), fill=col + (255,))
    if with_text:
        f = ImageFont.truetype('C:/Windows/Fonts/arialbd.ttf', 52 * S)
        txt = 'KAER'
        w = sum(d.textlength(ch, font=f) for ch in txt) + 8 * S * (len(txt) - 1)
        x = 256 * S - w / 2
        for ch in txt:
            d.text((x, 436 * S), ch, font=f, fill=WHITE + (255,), anchor='ls')
            x += d.textlength(ch, font=f) + 8 * S
    return im.resize((size, size), Image.LANCZOS)


emblem_png(512).save(OUT + '/img/emblem.png')
emblem_png(256).save(OUT + '/img/logo-256.png')
fav = emblem_png(256, with_text=False)
fav.save(OUT + '/favicon.ico', sizes=[(16, 16), (32, 32), (48, 48)])
ic = Image.new('RGBA', (180, 180), WHITE + (255,))
ic.alpha_composite(emblem_png(160, with_text=False), (10, 10))
ic.convert('RGB').save(OUT + '/apple-touch-icon.png')

# ---------- 히어로 일러스트 (SVG) ----------
hero = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 520" role="img" aria-label="평가에서 치료, 재활, 복귀로 이어지는 운동재활 경로">
<defs>
  <linearGradient id="path" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#5eead4"/><stop offset=".55" stop-color="#fdba74"/><stop offset="1" stop-color="#ea580c"/></linearGradient>
  <radialGradient id="glow" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ea580c" stop-opacity=".55"/><stop offset="1" stop-color="#ea580c" stop-opacity="0"/></radialGradient>
</defs>
<g fill="none" stroke="#ffffff" stroke-opacity=".09">
  <circle cx="310" cy="270" r="90"/><circle cx="310" cy="270" r="160"/><circle cx="310" cy="270" r="230"/><circle cx="310" cy="270" r="300"/>
</g>
<g stroke="#ffffff" stroke-opacity=".12" stroke-width="1"><path d="M0 470h560M0 400h560M0 330h560" stroke-dasharray="2 8"/></g>
<path d="M44 436 C150 438 196 360 262 304 S392 190 470 118" fill="none" stroke="url(#path)" stroke-width="5" stroke-linecap="round"/>
<g>
  <circle cx="44" cy="436" r="9" fill="#5eead4"/><circle cx="44" cy="436" r="18" fill="none" stroke="#5eead4" stroke-opacity=".35"/>
  <circle cx="176" cy="392" r="9" fill="#a7f3d0"/><circle cx="176" cy="392" r="18" fill="none" stroke="#a7f3d0" stroke-opacity=".35"/>
  <circle cx="300" cy="278" r="9" fill="#fdba74"/><circle cx="300" cy="278" r="18" fill="none" stroke="#fdba74" stroke-opacity=".35"/>
</g>
<g font-family="Pretendard Variable, Pretendard, Apple SD Gothic Neo, Noto Sans KR, sans-serif" font-size="13" font-weight="700" letter-spacing="2" fill="#ffffff" fill-opacity=".9">
  <text x="44" y="474">ASSESS</text><text x="150" y="430">TREAT</text><text x="270" y="316">REHAB</text>
</g>
<circle cx="470" cy="118" r="70" fill="url(#glow)"/>
<g stroke="#ffffff" stroke-opacity=".28" stroke-width="3" stroke-linecap="round"><path d="M360 96h46M340 118h66M372 140h34"/></g>
<g fill="none" stroke="#ffffff" stroke-width="7" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="476" cy="62" r="13" fill="#ffffff" stroke="none"/>
  <path d="M472 84 L456 134"/>
  <path d="M470 94 L498 112 L514 96"/>
  <path d="M470 94 L444 108 L430 92"/>
  <path d="M456 134 L482 156 L476 190"/>
  <path d="M456 134 L432 166 L404 160"/>
</g>
<g fill="#ea580c"><circle cx="470" cy="94" r="6"/><circle cx="456" cy="134" r="6"/><circle cx="482" cy="156" r="5"/><circle cx="432" cy="166" r="5"/><circle cx="498" cy="112" r="5"/><circle cx="444" cy="108" r="5"/></g>
<g font-family="Pretendard Variable, Pretendard, Apple SD Gothic Neo, Noto Sans KR, sans-serif" font-size="13" font-weight="800" letter-spacing="2" fill="#fdba74"><text x="430" y="226">RETURN</text></g>
</svg>'''
io.open(OUT + '/img/hero-illustration.svg', 'w', encoding='utf-8').write(hero)

# ---------- 배경 패턴 (SVG) ----------
pat = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
<rect width="1200" height="600" fill="#0b2340"/>
<g fill="none" stroke="#ffffff" stroke-opacity=".08"><circle cx="980" cy="120" r="120"/><circle cx="980" cy="120" r="210"/><circle cx="980" cy="120" r="300"/><circle cx="980" cy="120" r="390"/></g>
<path d="M-20 520 C 260 540 420 380 640 300 S 960 150 1240 40" fill="none" stroke="#ea580c" stroke-opacity=".35" stroke-width="3"/>
<g fill="#ffffff" fill-opacity=".1">''' + ''.join('<circle cx="%d" cy="%d" r="2"/>' % (60 + i * 60, 60 + j * 60) for i in range(20) for j in range(10) if (i * 7 + j * 3) % 5 == 0) + '''</g>
</svg>'''
io.open(OUT + '/img/hero-bg.svg', 'w', encoding='utf-8').write(pat)

# ---------- OG 이미지 1200x630 ----------
W, H = 1200, 630
og = Image.new('RGB', (W, H), NAVY)
px = og.load()
for y in range(H):
    for x in range(W):
        t = (x / W) * 0.55 + (y / H) * 0.45
        px[x, y] = tuple(int(NAVY_D[i] * (1 - t) + (18, 52, 90)[i] * t) for i in range(3))
ov = Image.new('RGBA', (W, H), (0, 0, 0, 0))
d = ImageDraw.Draw(ov)
for r in (110, 190, 270, 350):
    d.ellipse((900 - r, 200 - r, 900 + r, 200 + r), outline=(255, 255, 255, 22), width=2)
og = Image.alpha_composite(og.convert('RGBA'), ov)
# rising path on the right
S2 = 3
layer = Image.new('RGBA', (W * S2, H * S2), (0, 0, 0, 0))
dd = ImageDraw.Draw(layer)
pp = [(700, 548), (850, 560), (910, 400), (1130, 196)]
for i in range(0, 601):
    t = i / 600
    x, y = bez(t, pp)
    col = (int(94 + (234 - 94) * t), int(234 + (88 - 234) * t), int(212 + (12 - 212) * t), 255)
    dd.ellipse(((x - 3.5) * S2, (y - 3.5) * S2, (x + 3.5) * S2, (y + 3.5) * S2), fill=col)
marks = [(0.0, 13, (94, 234, 212), 'ASSESS', (-6, 30)), (0.36, 13, (167, 243, 208), 'TREAT', (-8, 32)), (0.68, 13, (253, 186, 116), 'REHAB', (22, 6)), (1.0, 24, ORANGE, 'RETURN', (-40, 50))]
for t, r, col, lab, off in marks:
    x, y = bez(t, pp)
    dd.ellipse(((x - r) * S2, (y - r) * S2, (x + r) * S2, (y + r) * S2), fill=col + (255,))
x, y = bez(1, pp)
dd.ellipse(((x - 58) * S2, (y - 58) * S2, (x + 58) * S2, (y + 58) * S2), outline=ORANGE_L + (120,), width=3 * S2)
layer = layer.resize((W, H), Image.LANCZOS)
og = Image.alpha_composite(og, layer)
d = ImageDraw.Draw(og)
em = emblem_png(120, with_text=False)
og.alpha_composite(em, (72, 72))
d.rectangle((72, 252, 136, 258), fill=ORANGE)
f1 = ImageFont.truetype(FB, 76)
f2 = ImageFont.truetype(FB, 38)
f3 = ImageFont.truetype(FR, 25)
fl = ImageFont.truetype('C:/Windows/Fonts/arialbd.ttf', 20)
d.text((72, 280), '대한운동재활학회', font=f1, fill=WHITE)
d.text((72, 392), '치료에서 복귀까지,', font=f2, fill=ORANGE_L)
d.text((72, 442), '근거로 이어지는 운동재활', font=f2, fill=ORANGE_L)
d.text((72, 514), 'Korean Academy of Exercise Rehabilitation · KAER', font=f3, fill=(225, 232, 240))
for t, r, col, lab, off in marks:
    x, y = bez(t, pp)
    d.text((x + off[0], y + off[1]), lab, font=fl, fill=(255, 255, 255, 235))
og.convert('RGB').save(OUT + '/img/og.jpg', quality=88, optimize=True)

for f in ('img/emblem.svg', 'img/emblem.png', 'favicon.ico', 'apple-touch-icon.png', 'img/hero-illustration.svg', 'img/hero-bg.svg', 'img/og.jpg'):
    print(f, os.path.getsize(OUT + '/' + f))
