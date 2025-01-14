import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './boards.model'
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto'

@Injectable()
export class BoardsService {
    private boards: Board[] = [];

    getAllBoards(): Board[] {
        return this.boards;
    }
/*
    createBoard(title: string, description: string): Board {
        const board: Board = {
            id: uuid(),
            title,
            description,
            status: BoardStatus.PUBLIC,
        };

        this.boards.push(board);
        return board;
    }
*/
    createBoard(createBoardDto: CreateBoardDto): Board {
        const { title, description } = createBoardDto;

        const board: Board = {
            id: uuid(),
            title,
            description,
            status: BoardStatus.PUBLIC,
        };

        this.boards.push(board);
        return board;
    }
/*
    getBoardById(id: string) {
        return this.boards.find(
            (board) => {
                return board.id === id;
            }
        );
    }
*/
    getBoardById(id: string) {
        return this.boards.find(
            (board) => board.id === id
        );
    }

    deleteById(id: string): void {
        this.boards = this.boards.filter((board) => board.id !== id);
    }

    updateBoardStatus(id: string, status: BoardStatus) {
        const board = this.getBoardById(id);
        board.status = status;
        return board;
    }
}
