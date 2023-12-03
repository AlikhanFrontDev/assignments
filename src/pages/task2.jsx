import React from "react";
import styled from "styled-components";
import file2 from "../pages/files/hw2.pdf";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"; // You can choose different styles

export default function Task2() {
  const code3 = `
    def draw_circle_midpoint(radius):

    x = radius

    y = 0

    points = []

    p = 1 - radius  # Initial decision parameter


    while x >= y:

        points.append((x, y))

        points.append((y, x))

        points.append((-y, x))

        points.append((-x, y))

        points.append((-x, -y))

        points.append((-y, -x))

        points.append((y, -x))

        points.append((x, -y))


        y += 1


        if p <= 0:

            p = p + 2 * y + 1

        else:

            x -= 1

            p = p + 2 * y - 2 * x + 1


    return points


# Example usage:

radius = 5

circle_points_midpoint = draw_circle_midpoint(radius)


# Plotting the circle

plt.figure(figsize=(6, 6))

plt.scatter([point[0] for point in circle_points_midpoint], [point[1] for point in circle_points_midpoint])

plt.title('Midpoint Circle Drawing Algorithm')

plt.xlabel('X-axis')

plt.ylabel('Y-axis')

plt.grid(True)

plt.show()
    `;
  const pythonCode1 = `
    def draw_circle(radius):

    x = 0

    y = radius

    p = 1 - radius

    points = []

    while x <= y:

        points.append((x, y))

        points.append((-x, y))

        points.append((x, -y))

        points.append((-x, -y))

        points.append((y, x))

        points.append((-y, x))

        points.append((y, -x))

        points.append((-y, -x))

        if p <= 0:

            p = p + 2 * x + 3

        else:

            p = p + 2 * (x - y) + 5

            y -= 1

        x += 1

    return points


# Example usage:

radius = 5

circle_points = draw_circle(radius)


# Plotting the circle

plt.figure(figsize=(6, 6))

plt.scatter([point[0] for point in circle_points], [point[1] for point in circle_points])

plt.title('Bresenham\'s Midpoint Circle Algorithm')

plt.xlabel('X-axis')

plt.ylabel('Y-axis')

plt.grid(True)

plt.show()
    `;
  const pythonCode = `def draw_line(x1, y1, x2, y2):

  dx = abs(x2 - x1)

  dy = abs(y2 - y1)

  steep = dy > dx

  if steep:

      x1, y1 = y1, x1

      x2, y2 = y2, x2

  if x1 > x2:

      x1, x2 = x2, x1

      y1, y2 = y2, y1

  dx = abs(x2 - x1)

  dy = abs(y2 - y1)

  error = dx // 2

  ystep = 1 if y1 < y2 else -1

  y = y1

  points = []

  for x in range(x1, x2 + 1):

      coord = (y, x) if steep else (x, y)

      points.append(coord)

      error -= dy

      if error < 0:

          y += ystep

          error += dx

  return points


# Example usage:

x1, y1 = 1, 1

x2, y2 = 8, 5

line_points = draw_line(x1, y1, x2, y2)


# Plotting the line

plt.figure(figsize=(6, 6))

plt.plot([point[0] for point in line_points], [point[1] for point in line_points], marker='o')

plt.title('Bresenham\'s Line Algorithm')

plt.xlabel('X-axis')

plt.ylabel('Y-axis')

plt.grid(True)

plt.show()")`;
  return (
    <Container>
      <h1 className="title">Mid-term 1127</h1>
      <div className="button">
          <a href={file2} target="_blank">
            Download PDF file
          </a>
        </div>
      <div className="boxes">
        <div className="box">
          <h1 className="theme"> Bresenham's Line Algorithm</h1>
          <p className="des">
            This algorithm is used to draw a line between two points on a grid.
            It uses integer arithmetic to draw lines efficiently.
          </p>
          <p  className="des">Here's a basic Python implementation:</p>
          <div className="code">
            <SyntaxHighlighter language="python" style={vscDarkPlus}>
              {pythonCode}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className="box">
          <h1 className="theme">Bresenhem's Circle Algorithm</h1>
          <p  className="des">
            For the circle drawing algorithms, Bresenham's Midpoint Circle
            Algorithm and Midpoint Circle Drawing Algorithm, the logic is a bit
            more complex. Here's an implementation of Bresenham's Midpoint
            Circle Algorithm:
          </p>
          <div className="code">
            <SyntaxHighlighter language="python" style={vscDarkPlus}>
              {pythonCode1}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className="box">
          <h1 className="theme">Midpoint Circle Drawing Algorithm</h1>
          <p  className="des">
            This Python code implements the Midpoint Circle Drawing Algorithm to
            generate points forming a circle with a given radius. The key
            difference between Bresenham's Midpoint Circle Algorithm and the
            Midpoint Circle Drawing Algorithm lies in their decision parameter
            calculation and sequence of generating points, but both serve the
            same purpose of drawing circles efficiently.
          </p>
          <SyntaxHighlighter language="python" style={vscDarkPlus}>
            {code3}
          </SyntaxHighlighter>
        </div>
        
      </div>
      
    </Container>
  );
}

const Container = styled.div`
.des{
    padding: 10px;
    font-size: large;
}
  .button {
    text-align: center;
    margin: 50px;
    /* padding: 50px 100px; */
  }
  .button a {
    padding: 25px 50px;
    border-radius: 12px;
    background-color: #fff;
    text-decoration: none;
    color: #000;
    font-size: 20px;
  }
  .theme {
    color: #000;
    font-size: 1.5rem;
    padding: 20px;
  }
  .title {
    text-align: center;
    padding: 50px;
    font-size: 3qrem;
  }
  .boxes {
    display: flex;
  }
  .box {
    width: 32%;
    margin: 0 auto;
    height: fit-content;
    /* background-color: red; */
  }
  .code {
    background-color: #000;
    padding: 10px;
  }
`;
