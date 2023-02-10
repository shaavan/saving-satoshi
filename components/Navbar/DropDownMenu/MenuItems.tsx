export default function MenuItems(props) {
  // props.title.number, props.title.name = Number of Chapter followed by Name,
  // According to code: In file Address.tsx
  // props.title.position = Chapter + {chapter.position + 1}
  // props.title.name = {chapter.title}

  // props.elements = array of names of options
  // According to code: In file Address.tsx
  // A single excercise name is know as lesson.title

  // Returns a div which renders only when menu is open.
  // Menu is open or not can be tracked outside in the caller file.
  // TODO: Future, We will also add HELP.

  const classes = {
    // Container will contain class common to the whole div.
    container: 'text-white/50',
    title: {
      //Represents semi white color.
      position: 'text-white/50',
      name: 'text-white',
    },
    line: 'text-white/50 m-auto w-11/12 h-5 bg-slate-600',
    lesson: {
      number: 'text-white/50',
      name: 'text-white',
    },
  }

  const styles = {
    line: {
      height: '2px',
      backgroundColor: 'black',
      width: '20%',
      margin: '10px auto',
    },
  }

  //props.lesson => array of lesson name.
  // props.lessonIndex => Index of lesson.
  // props.isLast => If the lesson is last (to render the last line)
  // Render a line above, lesson below.
  // If lessonIndex

  // We have to also add lesson id.

  // return (
  //   <div>
  //     <div
  //       className={classes.line}
  //       style={{
  //         height: "2px",
  //         backgroundColor: "black",
  //         width: "20%",
  //         margin: "10px auto"
  //       }}
  //     />
  //     <div>
  //       {props.lessonIndex}.{" "}
  //       <span className={classes.lesson.name}>{props.lesson}</span>
  //     </div>
  //     {props.isLast && <div className={classes.line} />}
  //   </div>
  // );

  return (
    <div>
      <div className="title">
        Chapter {props.index}.<span>{props.title}</span>
      </div>
      {props.lessons.map((lesson, index) => {
        return (
          <div>
            <div className={classes.line} style={styles.line} />
            <div>
              {index}. <span className={classes.lesson.name}>{lesson}</span>
            </div>
          </div>
        )
      })}
      <div className={classes.line} style={styles.line} />
    </div>
  )
}
